# s = input()

# x, y = int(s[1]), ord(s[0]) % 96

input_data = input()
x, y = int(input_data[1]), ord(input_data[0]) - ord('a') + 1

# dx = [-2, -2, 2, 2, -1, 1, -1, 1]
# dy = [-1, 1, -1, 1, -2, -2, 2, 2]

steps = [(-2, -1), (-2, 1), (2, -1), (2, 1), (-1, -2), (1, -2), (-1, 2), (1, 2)]

result = 0

for step in steps :
    nx = x + step[0]
    ny = y + step[1]

    if nx >= 1 and ny >= 1 and nx <= 8 and ny <= 8 :
        result+=1

print(result)