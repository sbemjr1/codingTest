n=int(input())
s=input()
result=0

for i in range(len(s)) :
    c = ord(s[i]) - 96
    result+=c * (31**i)
print(result%1234567891)