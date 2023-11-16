T = int(input())

for tc in range(1, T+1):
    n = int(input())
    arr = list(map(int, input().split()))
    result = []

    for i in range(101) :
        result.append(arr.count(i))
    for i in range(len(result)-1,-1,-1) :
        if result[i] == max(result) :
            print(f"#{tc}", i)
            break
