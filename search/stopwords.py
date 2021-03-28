import pickle

# sources:
# http://www.ranks.nl/stopwords
# http://members.unine.ch/jacques.savoy/clef/englishST.txt
# download stopword lists & save in .txt files

with open("ranks_nl_stopwords.txt", "r", encoding="utf-8") as f1, open("englishST.txt", "r", encoding="utf-8") as f2:
    line_file1 = f1.readlines()
    line_file1 = [l.rstrip() for l in line_file1]
    line_file2 = f2.readlines()
    line_file2 = [l.rstrip() for l in line_file2]
    stopwords =  set(line_file1 + line_file2)
    print(len(stopwords))
    pickle.dump(stopwords, open( "stopwords.p", "wb" ) )
