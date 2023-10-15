d=[]
o=[]
for i in range(10) :
    d.append(int(input()))
for i in range(10) :
    if not d[i] % 42 in o :
        o.append(d[i] % 42)
print(len(o))