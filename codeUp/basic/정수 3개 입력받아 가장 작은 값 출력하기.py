a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
c = (a if (a<b) else b) if ((a if (a<b) else b)<c) else c
print(c)