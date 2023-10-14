n=int(input())
m = 1

for i in range(n) :
    for j in range(n-m) :
        print(" ",end="")
    for k in range(n-m,n) :
        print("*",end="")
    m+=1
    print()