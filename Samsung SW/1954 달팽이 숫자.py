T = int(input())
    
for tc in range(1, T+1):
    n = int(input())
    move = [[0,1],[1,0],[0,-1],[-1,0]]
    snail = [[0] * n for _ in range(n)]
    num = 1
    d = 0
    x,y = 0,-1

    while num <= (n*n) :
        nx,ny = x + move[d][0], y + move[d][1]
        if 0 <= nx < n and 0 <= ny < n and snail[nx][ny] == 0 :
            snail[nx][ny] = num
            num+=1
            x,y = nx,ny
        else :
            d = (d + 1) % 4 
    
    print(f"#{tc}")
    for i in snail :
        print(*i)