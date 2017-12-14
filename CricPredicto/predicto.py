import pymongo
from pymongo import MongoClient
client=MongoClient('192.168.1.244',27017)
db=client.Cric
BLUE, RED, WHITE, YELLOW, MAGENTA, GREEN, END = '\33[94m', '\033[91m', '\33[97m', '\33[93m', '\033[1;35m', '\033[1;32m', '\033[0m'

print(("""{0}
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─████████████████───██████████████─████████████───██████████─██████████████─██████████████─██████████████─
─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░████─██░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██░░██████░░██─██░░████████░░██───██░░██████████─██░░████░░░░██─████░░████─██░░██████████─██████░░██████─██░░██████░░██─
─██░░██──██░░██─██░░██────██░░██───██░░██─────────██░░██──██░░██───██░░██───██░░██─────────────██░░██─────██░░██──██░░██─
─██░░██████░░██─██░░████████░░██───██░░██████████─██░░██──██░░██───██░░██───██░░██─────────────██░░██─────██░░██──██░░██─
─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░██──██░░██───██░░██───██░░██─────────────██░░██─────██░░██──██░░██─
─██░░██████████─██░░██████░░████───██░░██████████─██░░██──██░░██───██░░██───██░░██─────────────██░░██─────██░░██──██░░██─
─██░░██─────────██░░██──██░░██─────██░░██─────────██░░██──██░░██───██░░██───██░░██─────────────██░░██─────██░░██──██░░██─
─██░░██─────────██░░██──██░░██████─██░░██████████─██░░████░░░░██─████░░████─██░░██████████─────██░░██─────██░░██████░░██─
─██░░██─────────██░░██──██░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░████─██░░░░░░██─██░░░░░░░░░░██─────██░░██─────██░░░░░░░░░░██─
─██████─────────██████──██████████─██████████████─████████████───██████████─██████████████─────██████─────██████████████─
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────


{1}""").format(RED,END))



team1 = ['V Kohli', 'MS Dhoni','GJ Maxwell','SS Iyer','KL Rahul','AB de Villiers','CH Gayle','Washington Sundar', 'DW Steyn','JJ Bumrah','BCJ Cutting']

team2 = ['MC Henriques','DA Warner','S Dhawan','M Vijay','P Kumar', 'Z Khan','Mohammed Shami','PJ Cummins','Yuvraj Singh','Mandeep Singh', 'KM Jadhav']

def teams1(a):
	count1=0
	print()
	batting=db.stadperformance.find_one({'$and':[{'batsman':a},{'stadiumid':5}]})
	bowling=db.stadperformancebal.find_one({'$and':[{'batsman':a},{'stadiumid':5}]})
	print(("{0}.....................................................................{1}").format(MAGENTA,WHITE))
	print("{0}Batsman Name:{1} ".format(YELLOW,WHITE),batting['batsman'])
	print()
	if(batting is not None):
		print(("{0}**BATTING PERFORMANCE**{1}").format(RED,WHITE))
		print()
		print("Ball faced: ",batting['balls'])
		print("Runs Scored: ",batting['runs'])
		print("No of Dot Balls: ",batting['dots'])
		print("No of Sixes: ",batting['sixes'])
		print("No of Fours:",batting['fours'])
		print("No of times got out: ",batting['wicket'])
		print("Strikerate: ",batting['strikerate'])
		#print("No of times Player of Match : ",batting['playerofmatch'])
		count1+=batting['playerofmatch']
		print()
	if(bowling is not None):
		print(("{0}**BOWLING PERFORMANCE{1}").format(RED,WHITE))
		print()
		print("Ball Bowled: ",bowling['balls'])
		print("Runs given: ",bowling['runs'])
		print("No of Dot Balls: ",bowling['dots'])
		print("No of Sixes from bowled Balls: ",bowling['sixes'])
		print("No of Fours from bowled Balls:",bowling['fours'])
		print("No of times taken wicket: ",bowling['wicket'])
		print("Bowling Economy: ",bowling['bowl_economy'])
		#print("No of times Player of Match : ",bowling['playerofmatch'])
		count1+=bowling['playerofmatch']
		print()
	print("No of times Player of Match : ",count1//2)
	print(("{0}.....................................................................{1}").format(MAGENTA,WHITE))
def teams2(a):
	print()
	count=0
	batting=db.stadperformance.find_one({'batsman':a})
	bowling=db.stadperformancebal.find_one({'batsman':a})
	print(("{0}.....................................................................{1}").format(MAGENTA,WHITE))
	print("{0}Batsman Name:{1} ".format(YELLOW,WHITE),batting['batsman'])
	
	print()
	if(batting is not None):
		print(("{0}**BATTING PERFORMANCE**{1}").format(RED,WHITE))
		print()
		print("Ball faced: ",batting['balls'])
		print("Runs Scored: ",batting['runs'])
		print("No of Dot Balls: ",batting['dots'])
		print("No of Sixes: ",batting['sixes'])
		print("No of Fours:",batting['fours'])
		print("No of times got out: ",batting['wicket'])
		print("Strikerate: ",batting['strikerate'])
		#print("No of times Player of Match : ",batting['playerofmatch'])
		count+=batting['playerofmatch']
		print()
	if(bowling is not None):
		print(("{0}**BOWLING PERFORMANCE{1}").format(RED,WHITE))
		print()
		print("Ball Bowled: ",bowling['balls'])
		print("Runs given: ",bowling['runs'])
		print("No of Dot Balls: ",bowling['dots'])
		print("No of Sixes from bowled Balls: ",bowling['sixes'])
		print("No of Fours from bowled Balls:",bowling['fours'])
		print("No of times taken wicket: ",bowling['wicket'])
		print("Bowling Economy: ",bowling['bowl_economy'])
		#print("No of times Player of Match : ",bowling['playerofmatch'])
		batting['playerofmatch']
		print()
	print("No of times Player of Match : ",count//2)
	count=0
	print(("{0}.....................................................................{1}").format(MAGENTA,WHITE))
print(("{0}TEAM 1 STATS{1}").format(BLUE,WHITE))
print()
for i in team1:
	teams1(i)
	print()

print(("{0}TEAM 2 STATS{1}").format(BLUE,WHITE))
print()
for j in team2:
	teams2(j)
	print()