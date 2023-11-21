# 내 풀이
# s = input()
# result = int(s[0])

# for i in range(len(s) - 1) :
#     if s[i] == '0' or s[i] == '1' :
#         result += int(s[i+1])
#     else :
#         result *= int(s[i+1])

# print(result)

s = input()
result = int(s[0])

for i in range(1, len(s)) :
    num = int(s[i])
    if num <= 1 or result <= 1 :
        result += num
    else :
        result *= num

print(result)