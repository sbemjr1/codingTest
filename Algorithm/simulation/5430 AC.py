import sys
input = sys.stdin.readline
from collections import deque

T = int(input().rstrip())

for _ in range(T) :
    command = input().rstrip()
    n = int(input().rstrip())
    arr = input().rstrip()[1:-1].split(",")
    queue = deque(arr)

    rev, front, back = 0, 0, len(queue)-1

    if n == 0:
        queue = []
        front = 0
        back = 0

    for j in command :
        if j == 'R' :
            rev += 1
        elif j == 'D' :
            if len(queue) < 1 :
                print('error')
                break
            else :
                if rev % 2 == 0 :
                    queue.popleft()
                else :
                    queue.pop()     
    else :
        if rev % 2 == 0:
            print("[" + ",".join(queue) + "]")
        else:
            queue.reverse()
            print("[" + ",".join(queue) + "]")