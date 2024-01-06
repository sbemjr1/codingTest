data = input()
_sum = 0
result = ''

for i in range(len(data)):
    if ord(data[i]) < 65:
        _sum += int(data[i])
    else:
        result += data[i]

result = ''.join(sorted(result)) 

print(result + str(_sum))