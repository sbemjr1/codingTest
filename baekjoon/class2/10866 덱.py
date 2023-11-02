import sys
from collections import deque

input = sys.stdin.readline
queue = deque()

N = int(input())


for _ in range(N) :
    x=list(input().split())
    result = 0
    if x[0] == "push_front" :
        queue.appendleft(int(x[1]))
    elif x[0] == "push_back" :
        queue.append(int(x[1]))
    elif x[0] == "pop_front" :
        if len(list(queue)) != 0 :
            result = queue.popleft()
            print(result)
        else :
            print(-1)
    elif x[0] == "pop_back" :
        if len(list(queue)) != 0 :
            result = queue.pop()
            print(result)
        else :
            print(-1)
    elif x[0] == "size" :
        print(len(list(queue)))
    elif x[0] == "empty" :
        if len(list(queue)) != 0 :
            print(0)
        else :
            print(1)
    elif x[0] == "front" :
        if len(list(queue)) != 0 :
            print(list(queue)[0])
        else :
            print(-1)
    elif x[0] == "back" :
        if len(list(queue)) != 0 :
            print(list(queue)[len(list(queue))-1])
        else :
            print(-1)