n = int(input())
k = 0

def whatIsRe(k) :
    if k == n :
        print('_' * (k * 4) + "\"재귀함수가 뭔가요?\"")
        print('_' * (k * 4) + "\"재귀함수는 자기 자신을 호출하는 함수라네\"")
        print('_' * (k * 4) + "라고 답변하였지.")
        return
    print('_' * (k * 4) + '\"재귀함수가 뭔가요?\"')
    print('_' * (k * 4) + "\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.")
    print('_' * (k * 4) + "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.")
    print('_' * (k * 4) + "그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"")
    k += 1 
    whatIsRe(k)
    k -= 1
    print('_' * (k * 4) + "라고 답변하였지.")


print('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.')
whatIsRe(k)

# n = int(input())
# c = 0

# def recursive_q(n,c):
#     print('____'*(c) + '\"재귀함수가 뭔가요?\"')
#     print('____'*(c) + '\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.')
#     print('____'*(c) + '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.')
#     print('____'*(c) + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"')
#     n -= 1
#     c += 1
#     if n < 1:
#         print('____'*(c) + '\"재귀함수가 뭔가요?\"')
#         print('____'*(c) + '\"재귀함수는 자기 자신을 호출하는 함수라네\"')
#         print('____'*(c) + '라고 답변하였지.')
#     else:
#         recursive_q(n,c)
#     print('____'*(c - 1) + '라고 답변하였지.')

# print('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.')
# recursive_q(n,c)