//package furama_managemrnt.serrvice.user.impl;
//
//import furama_managemrnt.model.MyUserDetail;
//import furama_managemrnt.model.User;
//import furama_managemrnt.repository.IUserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//@Service
//@Transactional
//public class MyUserDetailServiceImpl implements UserDetailsService {
//    @Autowired
//    private IUserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUserName(username);
//
//        if (user == null){
//            throw new UsernameNotFoundException("User Name: "+ username + "Not Found");
//        }
//        return new MyUserDetail(user);
//    }
//}
