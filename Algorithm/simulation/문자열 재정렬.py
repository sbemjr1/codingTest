# s = input()
# s = sorted(s)
# result = 0

# for i in range(len(s)) :
#     if ord(s[i]) < 65 :
#         result += int(s[i])
#     else :
#         ans = s[i::]
#         break

# print(''.join(ans) + str(result))

data = input()
result = []
value = 0

for x in data :
    if x.isalpha() :
        result.append(x)
    else :
        value += int(x)

result.sort()

if value != 0 :
    result.append(str(value))

print(''.join(result))