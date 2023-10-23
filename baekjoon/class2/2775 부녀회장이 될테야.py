T=int(input())

for i in range(T) :
    k=int(input())
    n=int(input())
    d=[]
    for q in range(k+1) :
        d.append([])
        if (q==0) :
            for j in range(n) :
                d[q].append(j+1)
        else :
            d[q].append(1)
            for j in range(1,n) :
                d[q].append(d[q-1][j] + d[q][j-1])
    print(d[k][n-1])



