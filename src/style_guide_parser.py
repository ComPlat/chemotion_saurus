import os
import re
import sys

from bs4 import BeautifulSoup

# list of terms that are always capitalized or uppercased
terms = frozenset(["Chemotion", "ELN", "API", "Visual Studio Code", "PostgreSQL", "GitHub"])

def typos(text):
    """ replace typos with correct words

    Args:
        f ([type]): file object
    """
    text = f.read()
    text = re.sub(r"([Cc]hemotion)?(.)?ELN", ' Chemotion ELN', text)
    text = re.sub(r"(\s)*Chemotion", ' Chemotion', text)
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
#     with open("docs/eln/firststeps.mdx", "r+") as f:
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
#         kwargs["subdir"]="eln"
#         f.seek(0)
#         toc(f, **kwargs)
#         f.seek(0)
#         tables(f, **kwargs)
#         f.seek(0)
#         typos(f)
#         f.seek(0)

        # capitalize_first(f)
        # f.seek(0)