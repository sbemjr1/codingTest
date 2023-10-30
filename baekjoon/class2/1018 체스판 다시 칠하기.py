import sys
input = sys.stdin.readline

n,m=map(int, input().split())
arr = []
firstWhiteArr = []
firstBlackArr = []
a=0
b=0
aplus=0
bplus=0
comp=[]
result=0

for i in range(n) :
    arr.append([])
    arr[i] = input().strip()

while b <= m-8 :
    while a <= n-8 :
        for i in range(a,a+8) :
            for j in range(b,b+8) :
                if (i+aplus)%2 == 0 :
                    if (j+bplus)%2 == 0 and arr[i][j] != "W" :
                        result+=1
                    elif (j+bplus)%2 == 1 and arr[i][j] != "B" :
                        result+=1
                elif (i+aplus)%2 == 1 :
                    if (j+bplus)%2 == 0 and arr[i][j] != "B" :
                        result+=1
                    elif (j+bplus)%2 == 1 and arr[i][j] != "W" :
                        result+=1
        firstWhiteArr.append(result)
        result=0
    
        for i in range(a,a+8) :
            for j in range(b,b+8) :
                if (i+aplus)%2 == 0 :
                    if (j+bplus)%2 == 0 and arr[i][j] != "B" :
                        result+=1
                    elif (j+bplus)%2 == 1 and arr[i][j] != "W" :
                        result+=1
                elif (i+aplus)%2 == 1 :
                    if (j+bplus)%2 == 0 and arr[i][j] != "W" :
                        result+=1
                    elif (j+bplus)%2 == 1 and arr[i][j] != "B" :
                        result+=1
        aplus+=1
        a=aplus
        firstBlackArr.append(result)
        result=0
    a=0
    aplus=0
    bplus+=1
    b=bplus

firstBlackArr.sort()
firstWhiteArr.sort()

if firstWhiteArr[0] < firstBlackArr[0] :
    print(firstWhiteArr[0])
else : 
    print(firstBlackArr[0])