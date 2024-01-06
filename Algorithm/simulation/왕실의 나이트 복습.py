data = input()

x = ord(data[0])-96
y = int(data[1])
_count = 0

# LU LD RU RD UR UL DR DL 
dx = [-2,-2,2,2,1,-1,1,-1]
dy = [-1,1,-1,1,-2,-2,2,2]

for i in range(8):
    nx = x + dx[i]
    ny = y + dy[i]

    if nx >= 1 and ny >= 1 and nx < 9 and ny < 9:
        _count += 1

print(_count)