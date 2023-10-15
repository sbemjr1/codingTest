n=int(input())
d=[]
for i in range(n) :
    d.append([])
    d[i] = list(input().split())
for i in range(len(d)) :
    for j in range(len(d[i][1])) :
        print(int(d[i][0]) * d[i][1][j], end="")
    print()