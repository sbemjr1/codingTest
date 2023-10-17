s=input()

if int(s) < 18 :
    c=0
else :
    c=int(s)-9*len(s)

for i in range(c,int(s)+1) :
    result=0
    for j in range(len(str(i))) :
        result+=int(str(i)[j])
    if i+result == int(s) :
        print(i)
        break

else : 
    print(0)