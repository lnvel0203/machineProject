package machine;
import java.util.ArrayList;
public class MachineInfo extends MainMachine {

	public static String[] name = {"콜라","환타","사이다","스윙칩","포카칩","썬칩"};
	public static int[] stock = {5,5,5,5,5,5};
	public static String pbox[] = new String[11];
	public static int profit = 0;

	ArrayList<String> box = new ArrayList<String>() {
		add(name[0])
		add(name[1])
		add(name[2])
		add(name[3])
		add(name[4])
		add(name[5])
	};
	ArrayList<Integer> price = new ArrayList<Integer>();{
		price.add(1000);
		price.add(1100);
		price.add(1200);
	}
}
