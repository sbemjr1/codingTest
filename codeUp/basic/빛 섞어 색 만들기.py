n1,n2,n3 = map(int, input().split())
s = 0
for i in range(n1) :
    for j in range(n2) :
        for k in range(n3) :
            s+=1
            print(i,j,k)
print(s)
