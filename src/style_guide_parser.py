import os
import re
import sys

from bs4 import BeautifulSoup

def typos(f):
    """ replace typos with correct words

    Args:
        f ([type]): file object
    """
    text = f.read()
    text = re.sub(r"[Cc]hemotion.*ELN", 'Chemotion ELN', text)
    if text:
        f.seek(0)
        f.write(text)
        f.truncate()
    print("\033[92m CHECK TYPOS")

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
            text = text + hashtags+" "+title[1].strip().capitalize() + "\n"
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
    # docs/eln/test.mdx
    # build/docs/eln/test/index.html
    warning = ""
    build_file = "build/"+kwargs["slug"]+"/index.html"
    if os.path.isfile(build_file):
        with open(build_file, "r+") as f_html:
            soup = BeautifulSoup(f_html, "html.parser")
            soup_th=soup.find_all("th")
            soup_td=soup.find_all("td")
            for s in soup_th+soup_td:
                if s.string.istitle():
                    s.string.replace_with(s.string.lower())
                    warning="\033[93m" + "WARNING: Table has capitalized letters. See Style Guide on www.chemotion.net"
            f_html.seek(0)
            f_html.write(str(soup))
            f_html.truncate()
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
        [type]: [0 or error message]
    """
    with open("sidebars.js", "r") as f_toc:
        try:
            if (kwargs["subdir"]+"/"+kwargs["slug"] or kwargs["subdir"]+"/"+kwargs["id"]) in f_toc.read():
                print("\033[92m CHECK TOC") #TODO?
                return 0
        except IndexError:
            print("\033[91m" + "ERROR: Slug or id not in TOC (sidebars.js).")
            # TODO exit step?

for file in sys.argv[1:]:
    with open(file, "r+") as f:
        dirs = file.split("/")
        lines = f.readlines()[:10]
        kwargs = {}
        slug = [l.split(":") for l in lines if (l.startswith("slug"))][0][1].strip()
        id = [l.split(":") for l in lines if (l.startswith("id"))][0][1].strip()
        if id:
            kwargs["id"]=id
        if slug:
            kwargs["slug"]=slug
        kwargs["subdir"]=dirs[1]
        # typos(f)
        # capitalize_first(f)
        # tables(f, **kwargs)
        # toc(f, **kwargs)
        
if __name__ == "__main__":
    # for testing
    #with open("docs/eln/analysis.mdx", "r+") as f:
    with open("docs/eln/test.mdx", "r+") as f:
        lines = f.readlines()[:10]
        kwargs = {}
        slug = [l.split(":") for l in lines if (l.startswith("slug"))][0][1].strip()
        id = [l.split(":") for l in lines if (l.startswith("id"))][0][1].strip()
        if id:
            kwargs["id"]=id
        if slug:
            kwargs["slug"]=slug
        kwargs["subdir"]="eln"
        toc(f, **kwargs)
        tables(f, **kwargs)
        typos(f)
        capitalize_first(f)