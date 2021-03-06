package com.poojakonde.employeemanagement.Repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.poojakonde.employeemanagement.Model.Employee;

@Repository
public interface employeeRepository extends JpaRepository<Employee, Long>{

	default Employee findAll(Employee employee) {
		
		return employee;
	}

	
}