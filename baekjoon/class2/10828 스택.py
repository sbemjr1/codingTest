import sys
input = sys.stdin.readline

N = int(input())
arr = []


for _ in range(N) :
    x=list(input().split())
    result = 0
    if x[0] == "push" :
        arr.append(int(x[1]))
    elif x[0] == "pop" :
        if len(arr) != 0 :
            result = arr.pop()
            print(result)
        else :
            print(-1)
    elif x[0] == "size" :
        print(len(arr))
    elif x[0] == "empty" :
        if len(arr) != 0 :
            print(0)
        else :
            print(1)
    elif x[0] == "top" :
        if len(arr) != 0 :
            print(arr[len(arr)-1])
        else :
            print(-1)