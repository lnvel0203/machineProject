package machineProject;

import java.util.ArrayList;
import java.util.Arrays;

public class MainchineInfo extends MainMachine {
	public static int[] stock = {5,5,5,5,5,5,5};
	public static int[] stock1 = {5,5,5,5,5,5,5};
	public static String pbox[] = new String[11];
	public static int profit = 0;
	public static String box = null;
	
	public static ArrayList<String> drink = new ArrayList<String>(Arrays.asList("�ݶ�","ȯŸ","���̴�")); 
	public static ArrayList<String> snack = new ArrayList<String>(Arrays.asList("����Ĩ","��īĨ","��Ĩ"));
	
	public static ArrayList<Integer> price = new ArrayList<Integer>(); {
		price.add(1000);
		price.add(1100);
		price.add(1200);
		price.add(1300);
		price.add(1300);
		price.add(1500);
		price.add(1500);
		price.add(1500);
	}
}
