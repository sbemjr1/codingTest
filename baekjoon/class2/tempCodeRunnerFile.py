N=int(input())
NF=1

for i in range(N,0,-1) :
    NF*=i

if str(NF).find("0") != -1 :
    print(len(str(NF))-str(NF).find("0"))
else :
    print(0)