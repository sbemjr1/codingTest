import sys, queue

input = sys.stdin.readline
queue = queue.Queue()

N = int(input())


for _ in range(N) :
    x=list(input().split())
    result = 0
    if x[0] == "push" :
        queue.put(int(x[1]))
    elif x[0] == "pop" :
        if queue.qsize() != 0 :
            result = queue.get()
            print(result)
        else :
            print(-1)
    elif x[0] == "size" :
        print(queue.qsize())
    elif x[0] == "empty" :
        if queue.qsize() != 0 :
            print(0)
        else :
            print(1)
    elif x[0] == "front" :
        if queue.qsize() != 0 :
            print(list(queue))
        else :
            print(1)