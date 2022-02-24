# empty() , size(), push(element), pop(), top()

# implementation: list
# Unfortunately, the list has a few shortcomings.
#  The items in the list are stored next to each other in memory, if the stack grows bigger than the block of memory that currently holds it, then Python needs to do some memory allocations. 
# This can lead to some append() calls taking much longer than other ones.

stack = []
stack.append('a')
stack.append('b')
stack.append('c')

print(stack)

stack.pop()
stack.pop()
stack.pop()

print(stack)

stack.pop()
