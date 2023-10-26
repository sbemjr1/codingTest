N=int(input())
d=[]
arr=[0] * N

for i in range(N) :
    d.append(list(map(int, input().split())))

for i in range(N) :
    for j in range(N) :
        if d[i][0] < d[j][0] and d[i][1] < d[j][1] :
            arr[i] += 1
    

for i in arr :
    print(i+1,end=" ")