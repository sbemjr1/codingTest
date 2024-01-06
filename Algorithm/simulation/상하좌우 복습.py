n = int(input())

move_list = list(input().split())
x=0
y=0

dx = [0,0,-1,1]
dy = [-1,1,0,0]
move_type = ['L','R','U','D']

for move in move_list:
    for i in range(4):
        if move == move_type[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    if nx >= 0 and ny >= 0 and nx < n and ny < n:
        x = nx
        y = ny

print(x+1,y+1)