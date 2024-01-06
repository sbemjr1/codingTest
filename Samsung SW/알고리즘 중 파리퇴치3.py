k = int(input())

for tc in range(k):
    arr=[]
    n,m = map(int, input().split())
    result = 0
    for i in range(n):
        arr.append(list(map(int, input().split())))
    
    for i in range(n):
        for j in range(n):
            answer = 0
            for l in range(1,m):
                if j+l < n:
                    answer += arr[i][j+l]
            for l in range(1,m):
                if i+l < n:
                    answer += arr[i+l][j]
            for l in range(m-1,0,-1):
                if i-l >= 0:
                    answer += arr[i-l][j]
            for l in range(m-1,0,-1):
                if j-l >= 0:
                    answer += arr[i][j-l]
            answer += arr[i][j]
            if answer >= result:
                result = answer
    
    for i in range(n):
        for j in range(n):
            answer = 0
            for l in range(1,m):
                if i+l < n and j+l < n:
                    answer += arr[i+l][j+l]
            for l in range(1,m):
                if i-l >= 0 and j-l >= 0:
                    answer += arr[i-l][j-l]
            for l in range(1,m):
                if i-l >= 0 and j+l < n:
                    answer += arr[i-l][j+l]
            for l in range(1,m):
                if i+l < n and j-l >= 0:
                    answer += arr[i+l][j-l]
            answer += arr[i][j]
            if answer >= result:
                result = answer
    
    print(result)