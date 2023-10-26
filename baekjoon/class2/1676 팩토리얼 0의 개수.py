N=int(input())
NF=1
c=0

for i in range(N,0,-1) :
    NF*=i

NF=str(NF)

for i in range(len(NF)-1,0,-1) :
    if NF[i] != "0" :
        print(c)
        exit()
    c+=1

print("0")