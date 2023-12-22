# s = input()
# numbers = []

# for i in range(len(s)):
#     numbers.append(int(s[i]))

# result = numbers[0]

# for i in range(1, len(numbers)):
#     if numbers[i - 1] == 1 or numbers[i - 1] == 0:
#         result += numbers[i]
#     else:
#         result *= numbers[i]

# print(result)

data = input()
result = int(data[0])

for i in range(1, len(data)):
    num = int(data[i])
    if num <= 1 or result <= 1:
        result += num
    else:
        result *= num

print(result)