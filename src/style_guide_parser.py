import re
import sys

from bs4 import BeautifulSoup

def typos(f):
    """
    replace typos with correct words
    """
    text = f.read()
    text = re.sub(r"[Cc]hemotion.*ELN", 'Chemotion ELN', text)
    if text:
        f.seek(0)
        f.write(text)
        f.truncate()

def capitalize_first(f):
    """
    correct title: capital letters only in first word
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

def tables(f):
    """ search for capitalized words in tables and lowercase them

    Args:
        f ([type]): [file object]
    """
    # docs/eln/test.mdx
    # build/docs/eln/test/index.html
    warning = ""
    build_file = "build/"+f.name.replace(".mdx", "")+"/index.html"
    with open(build_file, "r+") as f_html:
        soup = BeautifulSoup(f_html, "html.parser")
        soup_th=soup.find_all("th")
        soup_td=soup.find_all("td")
        for s in soup_th+soup_td:
            if s.string.istitle():
                s.string.replace_with(s.string.lower())
                warning="\033[93m" + "WARNING:  table has capitalized letters. See https://www.chemotion.net/chemotionsaurus/docs/eln/styleguide_docusaurus"
        f_html.seek(0)
        f_html.write(str(soup))
        f_html.truncate()
    if warning:
        print(warning)

def toc(f, subdir):
    """[summary]

    Args:
        f ([type]): [file object]
        subdir ([type]): [eln or repo]

    Returns:
        [type]: [0 or error message]
    """
    attr = [l.split(":") for l in f.readlines()[:10] if (l.startswith("slug") or l.startswith("id"))]
    with open("sidebars.js", "r") as f_toc:
        try:
            if subdir+"/"+attr[0][1].strip() in f_toc.read():
                return 0
        except IndexError:
            print("\033[91m" + "ERROR: Slug or id not in TOC (sidebars.js). See https://www.chemotion.net/chemotionsaurus/docs/eln/use_docusaurus#toc")
            # TODO end step?

for file in sys.argv[1:]:
    with open(file, "r+") as f:
        dirs = file.split("/")
        typos(f)
        capitalize_first(f)
        tables(f)
        toc(f, dirs[1])
        
if __name__ == "__main__":
    # for testing
    #with open("docs/eln/analysis.mdx", "r+") as f:
    with open("docs/eln/test.mdx", "r+") as f:
        toc(f, "eln")
        typos(f)
        capitalize_first(f)
        tables(f)
        #tables(f)
        #capitalize_first(f)