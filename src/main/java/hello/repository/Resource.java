package hello.repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Resource {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String status;

    private String date;
    private Integer amount;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getstatus() {
		return status;
	}

	public void setstatus(String status) {
		this.status = status;
	}

	public String getdate() {
		return date;
	}

	public void setdate(String date) {
		this.date = date;
	}
	public Integer getamount() {
		return amount;
	}

	public void setamount(Integer amount) {
		this.amount = amount;
	}


}
