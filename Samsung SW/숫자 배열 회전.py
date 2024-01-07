tc = int(input())

for t in range(1,tc+1):
    n = int(input())
    arr = []
    ans = []
    for i in range(n):
        arr.append(list(input().split()))
    
    for k in range(3):
        answer = []
        for j in range(n):
            result = []
            for i in range(n-1,-1,-1):
                result.append(arr[i][j])
            answer.append(result)

        arr = answer
        ans.append(answer)
    
    
    print(f'#{t}')
    
    for m in range(n):
        for l in range(3):
            print(''.join(ans[l][m]), end=' ')
        print()