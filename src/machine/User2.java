package machine;
import java.sql.Timestamp;
import java.util.Scanner;
public class User2 extends MachineInfo implements User {
	
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
			num = sc.nextInt();
			if(num==1) {
				back = true;		
				while(back) {
					System.out.println("===============================================");
					System.out.println("   | 1."+ box.get(0) +  "| 2." + box.get(1) + "| 3. " + box.get(2) + "| 4. �ڷΰ��� | ");
					System.out.println("===============================================");
					System.out.println();
					System.out.print("��ǰ�� ������ : ");
					num = sc.nextInt();	
					if(num==1) {
						if(stock[0]==0) {
							System.out.println("��� �����մϴ�.");
							back = false;
						}else {
							stock[0]--;
							num2=1;
							count();
							goods();
						}
					}else if(num==2) {
						if(stock[1]==0) {
							System.out.println("��� �����մϴ�.");
							back = false;
						}else {
							stock[1]--;
							num2=2;
							count();
							goods();
						}
					}else if(num==3){
						if(stock[2]==0) {
							System.out.println("��� �����մϴ�.");
							back = false;
						}else {
							stock[2]--;
							num2=3;
							count();
							goods();
						}
					}else if(num==4) {
						System.out.println("�ڷΰ���");
						back=false;;
					}else {
						System.out.println("�߸� �Է��Ͽ����ϴ�. �ٽ� �Է��ϼ���.");
						back=false;
					}
				}
			}else if(num==2){
				back = true;		
				while(back) {
					System.out.println("===============================================");
					System.out.println("   | 1."+ box.get(3) +  "| 2." + box.get(4) + "| 3. " + box.get(5) + "| 4. �ڷΰ��� | ");
					System.out.println("===============================================");
					System.out.println();
					System.out.print("��ǰ�� ������ : ");
					num = sc.nextInt();
					if(num==1) {
						if(stock[3]==0) {
							System.out.println("��� �����մϴ�.");
							back = false;
						}else {
							stock[3]--;
							num2=1;
							num3=3;
							count();
							goods1();
						}
					}else if(num==2) {
						if(stock[4]==0) {
							System.out.println("��� �����մϴ�.");
							back = false;
						}else {
							stock[4]--;
							num2=2;
							num3=4;
							count();
							goods1();
						}
					}else if(num==3){
						if(stock[5]==0) {
							System.out.println("��� �����մϴ�.");
							back = false;
						}else {
							stock[5]--;
							num2=3;
							num3=5;
							count();
							goods1();
						}
					}else if(num==4) {
						System.out.println("�ڷΰ���");
						back=false;
					}else {
						System.out.println("�߸� �Է��Ͽ����ϴ�. �ٽ� �Է��ϼ���.");
						back=false;
					}
				}
			}else if(num==3) {
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
	public void goods() {
		System.out.println("===============================================");
		System.out.println();
		System.out.println(box.get(num-1) + "�� �����ϼ̽��ϴ�.");
		System.out.println(box.get(num-1)+"�� ������ " + price.get(num2-1) + "���Դϴ�.");
		System.out.println();
		System.out.println("===============================================");
		purchase();
	}
	@Override
	public void goods1() {
		System.out.println("===============================================");
		System.out.println();
		System.out.println(box.get(num3) + "�� �����ϼ̽��ϴ�.");
		System.out.println(box.get(num3)+"�� ������ " + price.get(num2-1) + "���Դϴ�.");
		System.out.println();
		System.out.println("===============================================");
		purchase();
	}
	@Override
	public void purchase() {
		System.out.println("�����Ͻðڽ��ϱ�?");
		System.out.println("1. �� 2. �ƴϿ�");
		System.out.print(":");
		num = sc.nextInt();
		switch(num) {
		case 1:
			if(pnum< price.get(num2-1)) {
				System.out.println("���� �����մϴ�. �߰� �ݾ��� �־��ּ���.");
				plusMoney();
				purchase();
			}else {
				pnum = pnum - price.get(num2-1);
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
			if(num3==3) {
				pbox[i] = box.get(num3)+"���Žð� : "+timestamp;
				i++;
			}else if(num3==4){
				pbox[i] = box.get(num3)+"���Žð� : "+timestamp;
				i++;
			}else if(num3==5){
				pbox[i] = box.get(num3)+"���Žð� : "+timestamp;
				i++;
			}else {
				pbox[i] = box.get(num-1)+"���Žð� : "+timestamp;
				i++;
			}
		}else {
			i=0;
			Long datetime = System.currentTimeMillis();
			Timestamp timestamp = new Timestamp(datetime);
			if(num3==3) {
				pbox[i] = box.get(num3)+"���Žð� : "+timestamp;
				i++;
			}else if(num3==4){
				pbox[i] = box.get(num3)+"���Žð� : "+timestamp;
				i++;
			}else if(num3==5){
				pbox[i] = box.get(num3)+"���Žð� : "+timestamp;
				i++;
			}else {
				pbox[i] = box.get(num-1)+"���Žð� : "+timestamp;
				i++;
			}
		}
	}
	@Override
	public void profit() {
		profit = profit + price.get(num2-1);
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

