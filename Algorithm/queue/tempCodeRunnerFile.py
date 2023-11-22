import sys
input = sys.stdin.readline
from collections import deque

n, k = map(int, input().split())

arr = [i for i in range(1,n+1)]
queue = deque(arr)
result = []
move = 0
cnt = 0

while len(queue) > 0 :
    cnt += 1
    if cnt == k :
        result.append(queue.popleft())
        cnt = 0
    else :
        move = queue.popleft()
        queue.append(move)

print('<'+', '.join(result)+'>') if len(result) != 1 else print('<1>')