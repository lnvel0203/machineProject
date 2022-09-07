package machineProject;

import java.sql.Timestamp;
import java.util.Scanner;


public class User2 extends MainchineInfo implements User {
	Scanner sc = new Scanner(System.in);
	@Override
	public void goodsInfo() {
		int count = 5;
		num3=0;
		back1 = true;
		while(back1) {
			System.out.println("===============================================");
			System.out.println("\t  | 1. ���� | 2. ���� | 3. �ڷΰ��� |");
			System.out.println("===============================================");
			System.out.print("�޴��� ������ : ");
			num1 = sc.nextInt();
			if(num1==1) {
				back = true;		
				while(back) {

					System.out.println("===============================================");
					int i = 1;
					for(String box : drink) {
						System.out.print("|"+i +". "+ box);
						i++;
					}
					System.out.println("|8. �ڷΰ��� | ");
					System.out.println("===============================================");
					System.out.println();
					System.out.print("��ǰ�� ������ : ");
					num = sc.nextInt();
					
					if(num<8) {
						switch(num) {
						default :
							stock();
						}
					}else if(num==8) {
						System.out.println("�ڷΰ���");
						back=false;
					}else {
						System.out.println("�߸� �Է��Ͽ����ϴ�. �ٽ� �Է��ϼ���.");
						back=false;
					}
				}



			}else if(num1==2){
				back = true;		
				while(back) {
					System.out.println("===============================================");
					int i = 1;
					for(String box : snack) {
						System.out.print("|"+i +"."+ box);
						i++;
					}
					System.out.println("|8. �ڷΰ��� | ");
					System.out.println("===============================================");
					System.out.println();
					System.out.print("��ǰ�� ������ : ");
					num = sc.nextInt();
				
					if(num<8) {
						switch(num) {
						default :
							stock1();
						}
					}else if(num==8) {
						System.out.println("�ڷΰ���");
						back=false;
					}else {
						System.out.println("�߸� �Է��Ͽ����ϴ�. �ٽ� �Է��ϼ���.");
						back=false;
					}
				}

			}else if(num1==3) {
				System.out.println("�ڷΰ���");
				refund();
				back1=false;
			}else {
				System.out.println("�߸� �Է��Ͽ����ϴ�. �ٽ� �Է��ϼ���.");
				--count;
				if(count == 0) {

					System.out.println("5ȸ �߸� �Է��ϼ̽��ϴ�. ����ȭ������ ���ư��ϴ�.");
					back1=false;
				}
			}
		}
	}





	@Override
	public void stock() {
		if(stock[num-1]==0) {
			System.out.println("��� �����մϴ�.");
			back = false;
		}else {
			stock[num-1]--;
			count();
			goods();
		}
	}
	@Override
	public void stock1() {
		if(stock1[num-1]==0) {
			System.out.println("��� �����մϴ�.");
			back = false;
		}else {
			stock1[num-1]--;
			num3=1;
			count();
			goods1();
		}
	}




	@Override
	public void goods() {
		System.out.println("===============================================");
		System.out.println();
		System.out.println(drink.get(num-1) + "�� �����ϼ̽��ϴ�.");
		System.out.println(drink.get(num-1)+"�� ������ " + price.get(num-1) + "���Դϴ�.");
		System.out.println();
		System.out.println("===============================================");
		purchase();
	}
	@Override
	public void goods1() {
		System.out.println("===============================================");
		System.out.println();
		System.out.println(snack.get(num-1) + "�� �����ϼ̽��ϴ�.");
		System.out.println(snack.get(num-1)+"�� ������ " + price.get(num-1) + "���Դϴ�.");
		System.out.println();
		System.out.println("===============================================");
		purchase();
	}
	@Override
	public void purchase() {
		System.out.println("�����Ͻðڽ��ϱ�?");
		System.out.println("1. �� 2. �ƴϿ�");
		System.out.print(":");
		num2 = sc.nextInt();
		switch(num2) {
		case 1:
			if(pnum< price.get(num-1)) {
				System.out.println("���� �����մϴ�. �߰� �ݾ��� �־��ּ���.");
				plusMoney();
				purchase();
			}else {
				pnum = pnum - price.get(num-1);
				profit();
				sell();
			}
			break;
		case 2: 
			goodsInfo();
			back = false;
			break;
		default :
			System.out.println("�ٽ� �Է��ϼ���.");
			break;
		}
	}
	@Override								
	public void sell() {
		System.out.println(pnum + "��");
		System.out.println("�������ּż� �����մϴ�");
		System.out.println("==========================================");
		System.out.println("1. �籸��\t 2. ����ȭ��");
		num = sc.nextInt();
		if(num==1) {
			goodsInfo();
			back = false;
		}else {
			refund();
			MainMachine.mainForm();
			back = false;
		}
	}
	@Override
	public void count() {
		if(i<=10) {
			Long datetime = System.currentTimeMillis();
			Timestamp timestamp = new Timestamp(datetime);

			if(num3==1) {
				pbox[i] = snack.get(num-1)+"���Žð� : "+timestamp;
				i++;
			}else {
				pbox[i] = drink.get(num-1)+"���Žð� : "+timestamp;
				i++;
			}
		}else {
			i=0;
			Long datetime = System.currentTimeMillis();
			Timestamp timestamp = new Timestamp(datetime);
			if(num3==1) {
				pbox[i] = snack.get(num-1)+"���Žð� : "+timestamp;
				i++;
			}else {
				pbox[i] = drink.get(num-1)+"���Žð� : "+timestamp;
				i++;
			}
		}
	}
	@Override
	public void profit() {
		profit = profit + price.get(num-1);
	}
	@Override
	public void refund() {
		System.out.println(pnum+"���� ��ȯ�մϴ�.");
		pnum=0;
	}
	@Override
	public void plusMoney() {
		System.out.print(":");
		num = sc.nextInt();
		pnum = pnum + num;
		System.out.println(pnum + "���� �ֽ��ϴ�.");
	}
}
