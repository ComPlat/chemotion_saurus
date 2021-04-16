import pickle
import os
import uuid
import json
import string

# todo generators

stopwords = pickle.load(open("stopwords.p", "rb"))
stopwords.add('')
records = []

root_dir = r'../docs'
url = "https://eln.chemotion.net/chemotionsaurus/"
ignore_files = ('admin.md', 'instructions.mdx')

def remove_words(words):
    clean_words = ''
    for line in words:
        for word in line.split():
            word = word.strip()
            word = word.replace("#", '')
            if word and word.lower() not in stopwords:
                clean_words += word+' '
    return clean_words

def get_attribute(lines, attr):
    attr_idx = [lines.index(i) for i in lines if i.startswith(attr)]
    if attr_idx:
        attr_idx = attr_idx[0]
        attr = lines[attr_idx].replace(attr, '')
        del lines[attr_idx]
    else:
        attr = ''
    return lines, attr

def get_lvls(line):
    splits = line.split(" ", 1)
    lvl = len(splits[0])
    return lvl, splits[1].strip()

def get_anchor(line):
    anchor = line.translate(str.maketrans('', '', string.punctuation))
    anchor = anchor.replace(' ', '-')
    return anchor.lower()

# input: attributes of single file
# todo **kwargs
def build_record(kwargs):
    kwargs["objectID"] = str(uuid.uuid4())
    if kwargs["content"] != None:
        records.append(kwargs)


def split_file(filepath, dir_name):
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
        lines_clean = []
        for l in lines:
            l = l.strip()
            if l != '':
                lines_clean.append(l)
        lines = lines_clean

        lines, slug = get_attribute(lines, 'slug: ')
        lines, title = get_attribute(lines, 'title: ')
        lines, author = get_attribute(lines, 'author: ')

        headings = [lines.index(i) for i in lines if i.startswith('#')] # indices
        headings = headings+[len(lines)+1]
        if len(headings) > 1:
            try:
                for i, h in enumerate(headings):
                    kwargs = {"hierarchy":
                    {"lvl0":title,
                          "lvl1": None,
                          "lvl2": None,
                          "lvl3": None,
                          "lvl4": None,
                          "lvl5": None,
                          "lvl6": None
                    }
                    }
                    kwargs["author"] = author
                    kwargs["url"] = url+dir_name.replace('../', '')+'/'+slug
                    kwargs["content"] = remove_words(lines[h:headings[i+1]])
                    lvl, line = get_lvls(lines[h])
                    kwargs["hierarchy"]["lvl"+str(lvl)] = line
                    anchor = get_anchor(line)
                    kwargs["anchor"] = '#'+anchor

                    build_record(kwargs)
            except:
                   KeyError
        else:
            kwargs = {"anchor": None}
            kwargs = {"hierarchy":
            {"lvl0":title,
                  "lvl1": None,
                  "lvl2": None,
                  "lvl3": None,
                  "lvl4": None,
                  "lvl5": None,
                  "lvl6": None}
            }
            kwargs["author"] = author
            kwargs["url"] = url+dir_name.replace('../', '')+'/'+slug
            kwargs["content"] = remove_words(lines)
            build_record(kwargs)

def read_files(dir_name):
    for entry in os.scandir(dir_name):
        if entry.is_dir():
            read_files(dir_name+'/'+entry.name)
        elif entry.is_file() and entry.name not in ignore_files and (entry.name.endswith('md') or entry.name.endswith('mdx')):
            split_file(entry.path, dir_name)

read_files(root_dir)

with open('browse_new.json', 'w', encoding="utf-8") as outfile:
    json.dump(records, outfile, ensure_ascii=False)