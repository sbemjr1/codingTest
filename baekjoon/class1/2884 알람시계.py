h,m=map(int,input().split())

if m-45 < 0 :
    h-=1
    if h<0 :
        h+=24
    m=m-45+60
else :
    m=m-45

print(h,m)