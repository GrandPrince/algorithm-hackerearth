def main(n, singers):
    from collections import Counter
    
    # Count the frequency of each singer
    singer_counts = Counter(singers)
    
    # Find the maximum frequency
    max_count = max(singer_counts.values())
    
    # Count how many singers have this maximum frequency
    favourite_singer_count = sum(1 for count in singer_counts.values() if count == max_count)
    
    return favourite_singer_count

# Read input
n = int(input().strip())
singers = list(map(int, input().strip().split()))

# Find and print the number of favourite singers
print(main(n, singers))