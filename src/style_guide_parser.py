import os
import re
import sys

from bs4 import BeautifulSoup

# list of terms that are always capitalized or uppercased
terms = frozenset(["Chemotion", "ELN", "API", "Visual Studio Code", "PostgreSQL", "GitHub"])

# do not correct lines, that starts with these words
exclude_lines = frozenset(["---", "id:", "slug:", "import"])

def typos(f):
    """ replace typos with correct words
    except lines with URIs because of wrong replacements in URIs
    Args:
        f ([type]): file object
    """
    text = ""
    code_block_counter = 0 # count lines that starts with ``` and therefore form a code block
    # pattern for not replacing terms
    pattern_uri = re.compile(r"(\]\(){1}(\S)*") # match ]( for markdown links
    pattern_url = re.compile(r"(https:\/\/|http:\/\/|www.)(\S)*")
    pattern_path = re.compile(r"[/\\](.)*[/\\](\S)*")
    pattern_url_title = re.compile(r"({#)(\S)*(})") # match {#eln-in-docker}
    pattern_mail = re.compile(r"(\S)+@(\S)+", re.IGNORECASE)
    pattern_highlight = re.compile(r"(`){1,3}(.)*(`){1,3}") # match `RAILS_ENV=test`
    pattern_bold= re.compile(r"<b>(.*)<\/b>") # match bold text
    # pattern terms
    pattern_eln = re.compile(r"(Chemotion)?(.)?ELN", re.IGNORECASE)
    pattern_chem_spectra = re.compile(r"Chem(.)?Spectra", re.IGNORECASE)

    for line in f.readlines():
        if line.split():
            if line.split()[0].startswith("```"): code_block_counter+=1
            if code_block_counter % 2 == 0 and line.split()[0] not in exclude_lines: 
                uris = re.finditer(pattern_uri, line)
                urls = re.finditer(pattern_url, line)
                paths = re.finditer(pattern_path, line)
                url_titles = re.finditer(pattern_url_title, line)
                mails = re.finditer(pattern_mail, line)
                highlights = re.finditer(pattern_highlight, line)
                bold = re.finditer(pattern_bold, line)
                if uris:
                    uri_matches=[match.group(0) for match in uris]
                if urls:
                    url_matches=[match.group(0) for match in urls]
                if paths:
                    path_matches=[match.group(0) for match in paths]
                if url_titles:
                    url_titles_matches=[match.group(0) for match in url_titles]
                if mails:
                    mail_matches = [match.group(0) for match in mails]
                if mails:
                    mail_matches = [match.group(0) for match in mails]
                if highlights:
                    highlight_matches = [match.group(0) for match in highlights]
                if bold:
                    bold_matches = [match.group(0) for match in bold]
                all_uris = uri_matches+url_matches+path_matches+url_titles_matches+mail_matches+highlight_matches+bold_matches
                if all_uris:
                    line = line
                else:
                    line = re.sub(pattern_eln, 'Chemotion ELN', line)
                    line = re.sub(r"(\s)*Chemotion", ' Chemotion', line)
                    line = re.sub(pattern_chem_spectra, 'ChemSpectra', line)
        text = text + line # always add corrected or not corrected line to text
    if text:
        f.seek(0)
        f.write(text)
        f.truncate()
        print("\033[92m CHECK TYPOS")

def cap(title):
    """write first word in title capitalized, the rest lowercased, except it is a term

    Args:
        title (string): title of a (sub)chapter

    Returns:
        cap_title: title with first word capitalized
    """
    title=title.strip().split()
    cap_title=title[0].capitalize()
    for t in title[1:]:
        if t not in terms:
            cap_title+=" "+t.lower()
        elif t in terms:
            cap_title+=" "+t
    return cap_title

def capitalize_first(f):
    """correct titles: capital letters only in first word

    Args:
        f ([type]): file object
    """
    text = ""
    for line in f:
        if line.startswith('#'):
            title = line.split('#')
            hashtags = re.search("[#]+",line).group(0)
            title =  re.split(hashtags, line)
            if title[1].strip():
                text = text + hashtags+" "+cap(title[1])+ "\n"
        else:
            text = text + line
    if text:
        f.seek(0)
        f.write(text)
        f.truncate()
        print("\033[92m CHECK TITLES")

def tables(f, **kwargs):
    """ search for capitalized words in tables and lowercase them

    Args:
        f ([type]): file object
    """
    warning = ""
    path = "build/docs/"+kwargs["subdir"]+"/"
    build_file=""
    if os.path.isfile(path+kwargs["filename"]+"/index.html"):
        build_file = path+kwargs["filename"]+"/index.html"
    if os.path.isfile(path+kwargs["slug"]+"/index.html"):
        build_file = path+kwargs["slug"]+"/index.html"
    if os.path.isfile(path+kwargs["id"]+"/index.html"):
        build_file = path+kwargs["id"]+"/index.html"
    if os.path.isfile(build_file):
        with open(build_file, "r+") as f_html:
            soup = BeautifulSoup(f_html, "html.parser")
            soup_th=soup.find_all("th")
            soup_td=soup.find_all("td")
            for s in soup_th+soup_td:
                try:
                    if s.string.strip()[0].istitle():
                        #s.string.replace_with(s.string.lower())
                        warning="\033[93m" + "WARNING: Table has capitalized letters. Look at the Style Guide in the documentation."
                except:
                    e = sys.exc_info()[0]
                    #print( "Error: %s" % e )
            # f_html.seek(0)
            # f_html.write(str(soup))
            # f_html.truncate()
    if warning:
        print(warning)
    else:
        print("\033[92m CHECK TABLES")

def toc(f, **kwargs):
    """check if file slug or id in TOC (sidebars.js)

    Args:
        f ([type]): file object
        subdir ([type]): eln or repo

    Returns:
        [string]: [success or error message]
    """
    with open("sidebars.js", "r") as f_toc:
        content = f_toc.read()
        try:
            if (kwargs["subdir"]+"/"+kwargs["slug"] in content) or (kwargs["subdir"]+"/"+kwargs["id"] in content) or (kwargs["subdir"]+"/"+kwargs["filename"] in content):
                print("\033[92m CHECK TOC")
            else:
                print("\033[91m ERROR: Filename, slug or id of new file not in TOC (sidebars.js).")
        except: 
            IndexError

for file in sys.argv[1:]:
    with open(file, "r+") as f:
        dirs = file.split("/")
        lines = f.readlines()[:10]
        kwargs = {}
        slug = [l.split(":") for l in lines if (l.startswith("slug"))][0][1].strip()
        id = [l.split(":") for l in lines if (l.startswith("id"))][0][1].strip()
        kwargs["filename"]=dirs[2].replace(".mdx", "").strip()
        if id:
            kwargs["id"]=id
        if slug:
            kwargs["slug"]=slug
        kwargs["subdir"]=dirs[1]
        f.seek(0)
        typos(f)
        f.seek(0)
        # capitalize_first(f) --> skip, because of too much terms in titles
        # f.seek(0)
        tables(f, **kwargs)
        f.seek(0)
        toc(f, **kwargs)
        f.seek(0)

#for testing
# if __name__ == "__main__":
#     with open("docs/eln/collections.mdx", "r+") as f:
#         f.seek(0)
#         lines = f.readlines()[:10]
#         kwargs = {}
#         slug = [l.split(":") for l in lines if (l.startswith("slug"))][0][1].strip()
#         id = [l.split(":") for l in lines if (l.startswith("id"))][0][1].strip()
#         kwargs["filename"]="test"
#         if id:
#             kwargs["id"]=id
#         if slug:
#             kwargs["slug"]=slug
#         subdir = f.name.split("/")
#         kwargs["subdir"]="/".join(subdir[1:-1])
#         f.seek(0)
        # toc(f, **kwargs)
        # f.seek(0)
        # tables(f, **kwargs)
        # f.seek(0)
        # typos(f)
        # f.seek(0)
        # capitalize_first(f)
        # f.seek(0)