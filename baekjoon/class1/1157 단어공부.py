s=input().lower()
d=[]

for i in range(97,123) :
    d.append(s.count(chr(i)))

if d.count(max(d)) == 1 :
    print(chr(d.index(max(d))+97).upper())
else :
    print("?")