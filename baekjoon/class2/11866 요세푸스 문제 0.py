import sys
input = sys.stdin.readline

n,k=map(int, input().split())
arr=[]
result=[]
c=0
i=0

for i in range(n) :
    arr.append(str(i+1))

while True :
    i+=1
    i=i%n
    if arr[i] == 0 :
        continue
    c+=1
    if c==k :
        result.append(arr[i])
        arr[i] = 0
        c=0
    if arr.count(0) == len(arr) :
        break

result1=", ".join(result)

print("<"+result1+">")
        