import sys
input = sys.stdin.readline

n,m=map(int, input().split())
d=[]
a=0
b=0
aplus=0
bplus=0
comp=[]
result=0

for i in range(n) :
    d.append([])
    d[i] = input().strip()

while b < m-8 :
    while a < n-8 :
        if d[a][b] == "W" :
            for i in range(a,a+8) :
                for j in range(b,b+8) :
                    if (i+aplus)%2 == 0 :
                        if (j+bplus)%2 == 0 and d[i][j] != "W" :
                            result+=1
                        elif (j+bplus)%2 == 1 and d[i][j] != "B" :
                            result+=1
                    elif (i+aplus)%2 == 1 :
                        if (j+bplus)%2 == 0 and d[i][j] != "B" :
                            result+=1
                        elif (j+bplus)%2 == 1 and d[i][j] != "W" :
                            result+=1
            a=aplus
            aplus+=1
            comp.append(result)
            result=0
        elif d[a][b] == "B" :
            for i in range(a,a+8) :
                for j in range(b,b+8) :
                    if (i+aplus)%2 == 0 :
                        if (j+bplus)%2 == 0 and d[i][j] != "B" :
                            result+=1
                        elif (j+bplus)%2 == 1 and d[i][j] != "W" :
                            result+=1
                    elif (i+aplus)%2 == 1 :
                        if (j+bplus)%2 == 0 and d[i][j] != "W" :
                            result+=1
                        elif (j+bplus)%2 == 1 and d[i][j] != "B" :
                            result+=1
            a=aplus
            aplus+=1
            comp.append(result)
            result=0
    a=0
    aplus=0
    bplus+=1
    b=bplus
    
print(comp)