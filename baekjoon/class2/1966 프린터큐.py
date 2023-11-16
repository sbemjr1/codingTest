import sys
from collections import deque
input = sys.stdin.readline

K=int(input().rstrip())

for _ in range(K) :
    N,M = map(int,input().split())
    queue = deque(list(map(int, input().split())))
    count = 0
    
    while queue :
        _max = max(queue)
        front = queue.popleft()
        M-=1

        if _max == front :
            count+=1
            if M<0 :
                print(count)
                break
        
        else :
            queue.append(front)
            if M<0 :
                M=len(queue) - 1 