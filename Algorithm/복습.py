# 주유소 복습

# import sys
# input = sys.stdin.readline

# n = int(input())
# distance = list(map(int, input().split()))
# cost = list(map(int, input().split()))

# result = 0
# min_cost = cost[0]

# for i in range(len(cost) - 1) :
#     min_cost = min(cost[i], min_cost)
#     result += min_cost * distance[i]

# print(result)

# 회의실 배정 복습
# import sys
# input = sys.stdin.readline

# n = int(input())
# time = [[0] * 2 for _ in range(n)]

# for i in range(n) :
#     s, e = map(int, input().split())
#     time[i][0] = s
#     time[i][1] = e

# time.sort(key= lambda x: (x[1], x[0])) #튜플로 여러개 조작 가능

# cnt = 1
# end_time = time[0][1]

# for i in range(1, n) :
#     if time[i][0] >= end_time :
#         cnt += 1
#         end_time = time[i][1]

# print(cnt)

#셀프 넘버
# numbers = set(range(10001))
# remove_set = set()

# for num in numbers :
#     for n in str(num) :
#         num += int(n)
#     remove_set.add(num)

# self_numbers = numbers - remove_set
# for i in sorted(self_numbers) :
#     print(i)

#통계학
# import sys
# input = sys.stdin.readline

# n = int(input())
# arr = []

# for _ in range(n) :
#     arr.append(int(input()))

# arr.sort()

# avg = 0
# middle = 0
# all_sum = 0

# arr_map = {}

# for i in arr :
#     all_sum += i
#     if i not in arr_map :
#         arr_map[i] = 1
#         continue
#     arr_map[i] += 1

# avg = round(all_sum / n)
# middle = arr[n // 2]

# mode = 0
# max_value = max(arr_map.values())
# modes = []
# for key, value in arr_map.items() :
#     if value == max_value :
#         modes.append(key)

# modes.sort()
# if (len(modes)) > 1 :
#     mode = modes[1]
# else :
#     mode = modes[0]

# _range = arr[-1] - arr[0]

# print(avg)
# print(middle)
# print(mode)
# print(_range)

#AC
# import sys
# input = sys.stdin.readline
# from collections import deque

# T = int(input())

# for _ in range(T) :
#     command = input().rstrip()
#     n = int(input())
#     arr = input().rstrip()[1:-1].split(',')
#     queue = deque(arr)

#     rev, front, back = 0, 0, len(queue) - 1

#     if n == 0 :
#         queue = []
#         front = 0
#         back = 0
    
#     for i in command :
#         if i == 'R':
#             rev += 1
#         elif i == 'D':
#             if len(queue) < 1 :
#                 print('error')
#                 break
#             else :
#                 if rev % 2 == 0 :
#                     queue.popleft()
#                 else :
#                     queue.pop()
#     else :
#         if rev % 2 == 0 :
#             print("[" + ",".join(queue) + "]")
#         else :
#             queue.reverse()
#             print("[" + ",".join(queue) + "]")

#스택 수열
# import sys
# input = sys.stdin.readline

# n = int(input())
# start = 1
# result = []
# stack = []

# for _ in range(n) :
#     end = int(input())
#     while start <= end :
#         stack.append(start)
#         result.append('+')
#         start += 1

#     if stack[-1] == end :
#         stack.pop()
#         result.append('-')
#     else :
#         print('NO')
#         break
# else :
#     for i in result :
#         print(i)

#에디터
import sys
input = sys.stdin.readline

input_data = list(input().rstrip())
n = int(input())

stack_l = input_data
stack_r = []

for i in range(n) :
    command = list(input().rstrip().split())
    if command[0] == 'L' :
        if len(stack_l) == 0 :
            continue
        stack_r.append(stack_l.pop())
    elif command[0] == 'D' :
        if len(stack_r) == 0 :
            continue
        stack_l.append(stack_r.pop())
    elif command[0] == 'P' :
        stack_l.append(command[1])
    elif command[0] == 'B' :
        if len(stack_l) == 0 :
            continue
        stack_l.pop()
stack_r.reverse()
print(''.join(stack_l + stack_r))