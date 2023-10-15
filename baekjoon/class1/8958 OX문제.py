n=int(input())
d=[]
s=0
c=0

for i in range(n) :
    d.append(input())

for i in range(n) :
    for j in range(len(d[i])) :
        if d[i][j] == "O" :
            c+=1
            s+=c
        else :
            c=0        
    print(s)
    s=0
    c=0
