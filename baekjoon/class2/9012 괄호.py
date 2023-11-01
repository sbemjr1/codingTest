import sys
input = sys.stdin.readline

N = int(input())

for i in range(N) :
    ps = input()
    config = 0
    for j in range(len(ps)) :
        if ps[j] == "(" :
            config+=1
        elif ps[j] == ")" :
            config-=1
        if config < 0 :
            print("NO")
            break
    if config == 0 :
        print("YES")
    elif config > 0 :
        print("NO")