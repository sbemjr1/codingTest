from itertools import combinations
import sys
input = sys.stdin.readline

while 1:
    s = list(map(int, input().split()))
    if s[0] == 0:
        break
    for comb in combinations(s[1:], 6):
        print(*comb)
    print()
