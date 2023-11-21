# n = int(input())
# data = list(input().split())
# x,y = 1,1

# for i in range(len(data)) :
#     if data[i] == 'R' :
#         if y + 1 <= n :
#             y += 1
#     elif data[i] == 'U' :
#         if x - 1 > 0 :
#             x -= 1
#     elif data[i] == 'L' :
#         if y - 1 > 0 :
#             y -= 1
#     elif data[i] == 'D' :
#         if x + 1 <= n :
#             x += 1

# print(x,y)
        
n = int(input())
x, y = 1, 1
plans = list(input().split())

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for plan in plans :
    for i in range(len(move_types)) :
        if plan == move_types[i] :
            nx = x + dx[i]
            ny = y + dy[i]
    if nx < 1 or ny < 1 or nx > n or ny > n :
        continue
    x, y = nx, ny

print(x, y)